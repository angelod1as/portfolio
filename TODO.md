TODO: Localization

  - I'll user react-i18n and react-i18n-next. That way, #2 is solved because
    it gives me /br/ out of the box.
  - Anyways, I'll need to study #1 and #3 better. At the moment, I'd prefer to
    write two different contents, each one in its language 
  - UPDATE: I just found out about native i18n routing in next. Will try that.
    => See `[slug].tsx`

---

  1. Performance-wise, is it better to group location and change in a switch or
    separate it (entry-level) and switch and reload page.
  2. I can have a /en/ or ?lang=en for setting up language (but ain't the latter 
    gonna bring me more issues?)
  3. I will have a switch that toggles EN to BR, but the issue is: will it hardcode
    (what I like about Next) both contents or will it load like normal React?
    My preference is hardcoded. If I need to double content in order to hardcode,
    okay.
  4. Entry-level looks better too if you think about asynchronous publishing (that
    the blog surely will have).
  5. There's lots of tests to be made and a lot to be done. Phew.

TODO: Current projects