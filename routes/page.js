const express = require("express");
const router = express.Router();

const pages = [
  { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
];

// createPage
router.post("/", (req,res) => {
  const newPage = req.body;
  page.push(newPage);
  res.json(newPage);
  });

// findAllPagesForWebsite
router.get("/website/:wid", (req,res) =>{
  const wid = req.params.wid;
  const currentPages = [];
  for(let i=o; i<pages.length;i++) {
    if(pages[i].websiteId === wid) {
      currentPages.push(pages[i]);
    }
  }
  res.json(currentPages);
  });

// findPageById
router.get("/:pid", (req, res) => {
  const pid = req.params.pid;
  let page = null;
  for (let i=0; i < pages.length; i++) {
  if (pages[i]._id === pid) {
  page = pages[i];
  }
}
res.json(page);
});

// updatePage
router.put("/", (req, res) => {
  const newPage = req.body;
  for(let i=0; i < pages.length; i++) {
  if(Pages[i]._id === newPage._id) {
    pages[i] = newPage;
  }
  }
  res.json(newPage);
});

// deletePage
router.delete("/:pid", (req, res) => {
  const pid = req.params.pid;
  for(let i=0; i < page.length; i++) {
  if(pages[i]._id === pid) {
    pages.splice(i, 1);
  }
  }
  res.json(pages);
 });

module.exports = router;