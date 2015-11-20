defmodule Newspacks.PackageView do
  use Newspacks.Web, :view

  def current_time do
    :calendar.local_time
  end

  def new_news_item do
    alias Newspacks.NewsItem
    NewsItem.changeset(%NewsItem{})
  end
end
