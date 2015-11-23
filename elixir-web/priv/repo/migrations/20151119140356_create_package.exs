defmodule Newspacks.Repo.Migrations.CreatePackage do
  use Ecto.Migration

  def change do
    create table(:packages) do
      add :published_at, :datetime

      timestamps
    end

  end
end
