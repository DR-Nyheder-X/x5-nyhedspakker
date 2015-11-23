defmodule Newspacks.PageController do
  use Newspacks.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
