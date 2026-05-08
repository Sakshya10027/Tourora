const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middleware.js");
const lisitngController = require("../controllers/lisitngs.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(lisitngController.index))
  .post(upload.single("image"), wrapAsync(lisitngController.createListing));

router.get("/new", isLoggedIn, lisitngController.renderNewFrom);

router
  .route("/:id")
  .get(wrapAsync(lisitngController.showLisitng))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("image"),
    wrapAsync(lisitngController.updateLisitng),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(lisitngController.deleteListing));

//Edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(lisitngController.renderEditForm),
);

router.router;

module.exports = router;
