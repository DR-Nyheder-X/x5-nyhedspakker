defmodule Newspacks.NewsItemController do
  use Newspacks.Web, :controller

  alias Newspacks.NewsItem
  alias Newspacks.Package

  plug :scrub_params, "news_item" when action in [:create, :update]
  plug :find_package

  defp find_package(conn, _options) do
    package = Repo.get! Package, conn.params["package_id"]
    assign conn, :package, package
  end

  # def index(conn, _params) do
  #   news_items = Repo.all(NewsItem)
  #   render(conn, "index.html", news_items: news_items)
  # end

  # def new(conn, _params) do
  #   changeset = NewsItem.changeset(%NewsItem{})
  #   render(conn, "new.html", changeset: changeset)
  # end

  def create(conn, %{"news_item" => news_item_params, "package_id" => package_id}) do
    package = conn.assigns.package
    attrs = Map.merge(news_item_params, %{"package_id" => package.id})
    changeset = NewsItem.changeset(%NewsItem{}, attrs)

    case Repo.insert(changeset) do
      {:ok, _news_item} ->
        conn
        |> put_flash(:info, "News item created successfully.")
        |> redirect(to: package_path(conn, :show, package.id))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  # def show(conn, %{"id" => id}) do
  #   news_item = Repo.get!(NewsItem, id)
  #   render(conn, "show.html", news_item: news_item)
  # end

  # def edit(conn, %{"id" => id}) do
  #   news_item = Repo.get!(NewsItem, id)
  #   changeset = NewsItem.changeset(news_item)
  #   render(conn, "edit.html", news_item: news_item, changeset: changeset)
  # end

  # def update(conn, %{"id" => id, "news_item" => news_item_params}) do
  #   package = nil
  #   news_item = Repo.get!(NewsItem, id)
  #   changeset = NewsItem.changeset(news_item, news_item_params)

  #   case Repo.update(changeset) do
  #     {:ok, news_item} ->
  #       conn
  #       |> put_flash(:info, "News item updated successfully.")
  #       |> redirect(to: package_news_item_path(conn, :show, package, news_item))
  #     {:error, changeset} ->
  #       render(conn, "edit.html", news_item: news_item, changeset: changeset)
  #   end
  # end

  # def delete(conn, %{"id" => id}) do
  #   news_item = Repo.get!(NewsItem, id)

  #   # Here we use delete! (with a bang) because we expect
  #   # it to always work (and if it does not, it will raise).
  #   Repo.delete!(news_item)

  #   conn
  #   |> put_flash(:info, "News item deleted successfully.")
  #   |> redirect(to: package_path(conn, :show, nil))
  # end

  # defp find_package! id do
  #   Repo.get! Package, id
  # end
end
