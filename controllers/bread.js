const router = require("express").Router();
const Bread = require("../models/bread");
//Render home page
router.get("/", (req, res) => {
  res.render("index", { breads: Bread });
});
//Render new page
router.get("/new", (req, res) => {
  res.render("new");
});
//Render specific bread
router.get("/:index", (req, res) => {
  const { index } = req.params;
  res.render("show", { bread: Bread[index], index});
});

//get EDIT PAGE
router.get('/:index/edit', (req, res)=>{
  const { index } = req.params;
  res.render("edit", { bread: Bread[index], index});
})

// router.get("/name/:name", (req, res) => {
//   const { name } = req.params;
//   const bread = Bread.find((b) => b.name === name);
//   res.send(bread);
// });

router.post("/", (req, res) => {
  let body = req.body;
  if (body.hasGluten === "on") {
    body.hasGluten = true;
  } else {
    body.hasGluten = false;
  }
  if (!body.image) {
    body.image = "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
  }
  Bread.push(body);
  res.status(303).redirect("/breads");
});
router.put("/:index", (req, res) => {
  const {index}= req.params
  let body = req.body;
  if (body.hasGluten === "on") {
    body.hasGluten = true;
  } else {
    body.hasGluten = false;
  }
  if (!body.image) {
    body.image = "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
  }
  Bread[index]= req.body
  res.status(303).redirect(`/breads/${index}`);
});

router.delete('/:index', (req, res)=>{
  const {index} = req.params
  Bread.splice(index, 1)
  res.status(303).redirect('/breads')
})
module.exports = router;
