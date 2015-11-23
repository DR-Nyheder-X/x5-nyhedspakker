defmodule Newspacks.NewsItemTest do
  use Newspacks.ModelCase

  alias Newspacks.Package
  alias Newspacks.NewsItem

  @valid_attrs %{body: "some content", title: "some content", url: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    package = %Package{}
              |> Package.changeset(%{published_at: :calendar.local_time})
              |> Repo.insert!
    attrs = Map.merge @valid_attrs, %{package_id: package.id}

    changeset = NewsItem.changeset(%NewsItem{}, attrs)

    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = NewsItem.changeset(%NewsItem{}, @invalid_attrs)
    refute changeset.valid?
  end
end
