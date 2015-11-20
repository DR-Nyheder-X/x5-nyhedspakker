defmodule Newspacks.Package do
  use Newspacks.Web, :model

  schema "packages" do
    field :published_at, Ecto.DateTime

    has_many :news_items, Newspacks.NewsItem

    timestamps
  end

  @required_fields ~w(published_at)
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
