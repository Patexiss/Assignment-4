const express = require("express");
const router = express.Router();
const Page = require("../models/Page");

// const pages = [
//   { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
//   { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
//   { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
// ];

// Create new Page
router.post("/", async (req,res) => {
  const newPage = new Page({...req.body});
  const page = await newPage.save();
  // page.push(newPage);
  res.json(newPage);
  });

// Get All Pages by given Website id
router.get("/website/:wid", async (req,res) =>{
  const wid = req.params.wid;
  currentPages = await Page.find({websiteId: wid});
  // for(let i=o; i<pages.length;i++) {
  //   if(pages[i].websiteId === wid) {
  //     currentPages.push(pages[i]);
  //   }
  // }
  res.json(currentPages);
  });

// findPageById
router.get("/:pid", async (req, res) => {
  const pid = req.params.pid;
  page = await Page.findById(pid);
//   let page = null;
//   for (let i=0; i < pages.length; i++) {
//   if (pages[i]._id === pid) {
//   page = pages[i];
//   }
// }
res.json(page);
});

// updatePage
router.put("/", async (req, res) => {
  const newPage = req.body;
  await Page.findByIdAndUpdate(newPage._id, newPage);
  // for(let i=0; i < pages.length; i++) {
  // if(Pages[i]._id === newPage._id) {
  //   pages[i] = newPage;
  // }
  // }
  res.json(newPage);
});

// deletePage
router.delete("/:pid", async (req, res) => {
  const pid = req.params.pid;
  await Page.findByIdAndRemove(pid);
  // for(let i=0; i < page.length; i++) {
  // if(pages[i]._id === pid) {
  //   pages.splice(i, 1);
  // }
  // }
  res.json(null);
 });

module.exports = router;