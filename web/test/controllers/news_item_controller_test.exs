defmodule Newspacks.NewsItemControllerTest do
  use Newspacks.ConnCase

  alias Newspacks.NewsItem
  @valid_attrs %{body: "some content", package_id: 42, title: "some content", url: "some content"}
  @invalid_attrs %{}

  setup do
    conn = conn()
    {:ok, conn: conn}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, news_item_path(conn, :index)
    assert html_response(conn, 200) =~ "Listing news items"
  end

  test "renders form for new resources", %{conn: conn} do
    conn = get conn, news_item_path(conn, :new)
    assert html_response(conn, 200) =~ "New news item"
  end

  test "creates resource and redirects when data is valid", %{conn: conn} do
    conn = post conn, news_item_path(conn, :create), news_item: @valid_attrs
    assert redirected_to(conn) == news_item_path(conn, :index)
    assert Repo.get_by(NewsItem, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, news_item_path(conn, :create), news_item: @invalid_attrs
    assert html_response(conn, 200) =~ "New news item"
  end

  test "shows chosen resource", %{conn: conn} do
    news_item = Repo.insert! %NewsItem{}
    conn = get conn, news_item_path(conn, :show, news_item)
    assert html_response(conn, 200) =~ "Show news item"
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_raise Ecto.NoResultsError, fn ->
      get conn, news_item_path(conn, :show, -1)
    end
  end

  test "renders form for editing chosen resource", %{conn: conn} do
    news_item = Repo.insert! %NewsItem{}
    conn = get conn, news_item_path(conn, :edit, news_item)
    assert html_response(conn, 200) =~ "Edit news item"
  end

  test "updates chosen resource and redirects when data is valid", %{conn: conn} do
    news_item = Repo.insert! %NewsItem{}
    conn = put conn, news_item_path(conn, :update, news_item), news_item: @valid_attrs
    assert redirected_to(conn) == news_item_path(conn, :show, news_item)
    assert Repo.get_by(NewsItem, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    news_item = Repo.insert! %NewsItem{}
    conn = put conn, news_item_path(conn, :update, news_item), news_item: @invalid_attrs
    assert html_response(conn, 200) =~ "Edit news item"
  end

  test "deletes chosen resource", %{conn: conn} do
    news_item = Repo.insert! %NewsItem{}
    conn = delete conn, news_item_path(conn, :delete, news_item)
    assert redirected_to(conn) == news_item_path(conn, :index)
    refute Repo.get(NewsItem, news_item.id)
  end
end
