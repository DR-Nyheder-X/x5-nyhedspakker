defmodule Newspacks.NewsItem do
  use Newspacks.Web, :model

  schema "news_items" do
    field :title, :string
    field :body, :string
    field :url, :string

    belongs_to :package, Newspacks.Package

    timestamps
  end

  @required_fields ~w(title body package_id url)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
