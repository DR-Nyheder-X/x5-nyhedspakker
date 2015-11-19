defmodule Newspacks.NewsItemController do
  use Newspacks.Web, :controller

  alias Newspacks.NewsItem

  plug :scrub_params, "news_item" when action in [:create, :update]

  def index(conn, _params) do
    news_items = Repo.all(NewsItem)
    render(conn, "index.html", news_items: news_items)
  end

  def new(conn, _params) do
    changeset = NewsItem.changeset(%NewsItem{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"news_item" => news_item_params}) do
    changeset = NewsItem.changeset(%NewsItem{}, news_item_params)

    case Repo.insert(changeset) do
      {:ok, _news_item} ->
        conn
        |> put_flash(:info, "News item created successfully.")
        |> redirect(to: news_item_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    news_item = Repo.get!(NewsItem, id)
    render(conn, "show.html", news_item: news_item)
  end

  def edit(conn, %{"id" => id}) do
    news_item = Repo.get!(NewsItem, id)
    changeset = NewsItem.changeset(news_item)
    render(conn, "edit.html", news_item: news_item, changeset: changeset)
  end

  def update(conn, %{"id" => id, "news_item" => news_item_params}) do
    news_item = Repo.get!(NewsItem, id)
    changeset = NewsItem.changeset(news_item, news_item_params)

    case Repo.update(changeset) do
      {:ok, news_item} ->
        conn
        |> put_flash(:info, "News item updated successfully.")
        |> redirect(to: news_item_path(conn, :show, news_item))
      {:error, changeset} ->
        render(conn, "edit.html", news_item: news_item, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    news_item = Repo.get!(NewsItem, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(news_item)

    conn
    |> put_flash(:info, "News item deleted successfully.")
    |> redirect(to: news_item_path(conn, :index))
  end
end
