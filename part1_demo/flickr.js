requirejs.config({
  paths: {
    ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
  }
});

require([
    'ramda',
    'jquery'
  ],
  function (_, $) {
    const trace = _.curry((tag, x) => {
      console.log(tag, x);
      return x;
    });

    const Impure = {
      getJSON: _.curry((callback, url) => {
        $.getJSON(url, callback);
      }),

      setHtml: _.curry((sel, html) => {
        $(sel).html(html);
      })
    };

    const url = (term) => {
      return 'https://api.flickr.com/services/feeds/photos_public.gne?tags='
        + term + '&format=json&jsoncallback=?';
    };

    const app = _.compose(Impure.getJSON(trace('response')), url);

    app('cats');
  }
);
