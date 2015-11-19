defmodule Newspacks.NewsItemTest do
  use Newspacks.ModelCase

  alias Newspacks.NewsItem

  @valid_attrs %{body: "some content", package_id: 42, title: "some content", url: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = NewsItem.changeset(%NewsItem{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = NewsItem.changeset(%NewsItem{}, @invalid_attrs)
    refute changeset.valid?
  end
end
