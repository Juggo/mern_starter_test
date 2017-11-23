import ShopList from '../models/shopList';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all lists
 * @param req
 * @param res
 * @returns void
 */
export function getShopLists(req, res) {
  ShopList.find().sort('-dateAdded').exec((err, shopLists) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ shopLists });
  });
}

/**
 * Get shop lists by name
 * @param req
 * @param res
 * @returns void
 */
export function getShopListsByFilter(req, res) {
  if (!req.params.name) {
    res.status(403).end();
  }
  
  ShopList.find({
      name: {$regex : sanitizeHtml(req.params.name), $options : 'i' }
    }).sort('-dateAdded').exec((err, shopLists) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ shopLists });
  });
}

/**
 * Save a list
 * @param req
 * @param res
 * @returns void
 */
export function addShopList(req, res) {
  if (!req.body.shopList.name || !req.body.shopList.content) {
    res.status(403).end();
  }

  const newShopList = new ShopList(req.body.shopList);

  // Let's sanitize inputs
  newShopList.name = sanitizeHtml(newShopList.name);
  newShopList.content = sanitizeHtml(newShopList.content);

  newShopList.slug = slug(newShopList.name.toLowerCase(), { lowercase: true });
  newShopList.cuid = cuid();
  newShopList.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ shopList: saved });
  });
}

/**
 * Get a single list
 * @param req
 * @param res
 * @returns void
 */
export function getShopList(req, res) {
  ShopList.findOne({ cuid: req.params.cuid }).exec((err, shopList) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ shopList });
  });
}