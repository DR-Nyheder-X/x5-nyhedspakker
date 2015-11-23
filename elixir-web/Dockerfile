FROM trenpixster/elixir

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN apt-get update \
      && apt-get install -y \
      rlwrap \
      postgresql-client \
      && rm -rf /var/lib/apt/lists/*;

ENV PHOENIX_VERSION=1.0.3

RUN mix archive.install https://github.com/phoenixframework/phoenix/releases/download/v$PHOENIX_VERSION/phoenix_new-$PHOENIX_VERSION.ez --force

RUN curl https://deb.nodesource.com/node_5.x/pool/main/n/nodejs/nodejs_5.0.0-1nodesource1~precise1_amd64.deb > node.deb \
      && dpkg -i node.deb \
      && rm node.deb

WORKDIR /app
COPY . /app

ENV MIX_ENV prod

RUN mix do deps.get, compile
RUN mix do phoenix.digest

CMD ["mix", "phoenix.server"]

