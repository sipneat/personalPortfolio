FROM debian

RUN apt-get update && apt-get install -y \
    build-essential \
    ruby \
    ruby-dev \
    ruby-bundler \
  && rm -rf /var/lib/apt/lists/* 
  
RUN gem install jekyll bundler

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install