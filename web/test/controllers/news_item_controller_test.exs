defmodule Newspacks.NewsItemControllerTest do
  use Newspacks.ConnCase

  alias Newspacks.NewsItem
  alias Newspacks.Package

  @valid_attrs %{body: "some content", title: "some content", url: "some content"}
  @invalid_attrs %{}

  setup do
    conn = conn()
    {:ok, conn: conn}
  end

  test "creates resource and redirects when data is valid", %{conn: conn} do
    package = create_package

    conn = post(conn, package_news_item_path(conn, :create, package), [
      package_id: package.id,
      news_item: @valid_attrs
    ])

    assert redirected_to(conn) == package_news_item_path(conn, :index, package)
    assert Repo.get_by(NewsItem, @valid_attrs)
  end

  # test "does not create resource and renders errors when data is invalid", %{conn: conn} do
  #   package = create_package
  #   conn = post conn, package_news_item_path(conn, :create, package), news_item: @invalid_attrs
  #   assert html_response(conn, 200) =~ "New news item"
  # end

  # test "shows chosen resource", %{conn: conn} do
  #   news_item = Repo.insert! %NewsItem{}
  #   conn = get conn, news_item_path(conn, :show, news_item)
  #   assert html_response(conn, 200) =~ "Show news item"
  # end

  # test "renders page not found when id is nonexistent", %{conn: conn} do
  #   assert_raise Ecto.NoResultsError, fn ->
  #     get conn, news_item_path(conn, :show, -1)
  #   end
  # end

  # test "renders form for editing chosen resource", %{conn: conn} do
  #   package = create_package
  #   news_item = Repo.insert! %NewsItem{package_id: package.id}
  #   conn = get conn, package_news_item_path(conn, :edit, package, news_item)
  #   assert html_response(conn, 200) =~ "Edit news item"
  # end

  # test "updates chosen resource and redirects when data is valid", %{conn: conn} do
  #   package = create_package

  #   news_item = Repo.insert! %NewsItem{package_id: package.id}

  #   conn = put conn, package_news_item_path(conn, :update, package, news_item), news_item: @valid_attrs
  #   assert redirected_to(conn) == package_news_item_path(conn, :show, package, news_item)
  #   assert Repo.get_by(NewsItem, @valid_attrs)
  # end

  # test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
  #   package = create_package
  #   news_item = Repo.insert! %NewsItem{}
  #   conn = put conn, package_news_item_path(conn, :update, package, news_item), news_item: @invalid_attrs
  #   assert html_response(conn, 200) =~ "Edit news item"
  # end

  # test "deletes chosen resource", %{conn: conn} do
  #   package = create_package
  #   news_item = Repo.insert! %NewsItem{}
  #   conn = delete conn, package_news_item_path(conn, :delete, package, news_item)
  #   assert redirected_to(conn) == package_news_item_path(conn, :index, package)
  #   refute Repo.get(NewsItem, news_item.id)
  # end

  defp create_package(attrs \\ %{}) do
    attrs = Map.merge(%{
      published_at: :calendar.local_time
    }, attrs)

    Package.changeset(%Package{}, attrs)
    |> Repo.insert!
  end
end
