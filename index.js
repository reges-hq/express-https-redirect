module.exports = function() {
  return function httpsRedirect(req, res, next) {
    if (
      req.hostname === "localhost" ||
      req.hostname.indexOf("default.svc.cluster.local") > -1
    ) {
      return next();
    }

    if (req.headers["x-forwarded-proto"] === "https") {
      return next();
    }

    return res.redirect("https://" + req.hostname + req.originalUrl);
  };
};
