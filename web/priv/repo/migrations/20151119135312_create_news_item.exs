defmodule Newspacks.Repo.Migrations.CreateNewsItem do
  use Ecto.Migration

  def change do
    create table(:news_items) do
      add :title, :string
      add :body, :text
      add :package_id, :integer
      add :url, :string

      timestamps
    end

  end
end
