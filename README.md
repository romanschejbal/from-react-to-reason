# from Madness to Reason

This app demostrates one of the approaches that one can take in order to integrate ReasonML into their existing React app.

It goes as follows:

1.  start by creating `src/Types.re`
1.  rewrite reducer into idiomatic Reason
1.  rewrite actions into idiomatic Reason
1.  update `src/store.js` for a custom middleware and reducer wrapper so actions can be used from and to javascript / reason
1.  ship it

In my talk I explain it in more detail but if you need help, you can always hit me on [twitter](http://twitter.com/romanschejbal).
