module.exports = function httpsRedirect(req, res, next) {
  if (req.hostname === "localhost") {
    return next();
  }

  if (req.headers["x-forwarded-proto"] === "https") {
    return next();
  }

  return res.redirect("https://" + req.hostname + req.originalUrl);
};
