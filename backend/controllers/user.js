let users = [
    {
        id:"1",
        name: "Furkan",
        email: "furkan@gmail.com",
        country: "Turkey",
        telno: "5555555",
        password:"1234",
    },
    {
        id: "2",
        name: "Ahmet",
        email: "Ahmet@gmail.com",
        country: "Turkey",
        telno: "5555555",
        password:"1234"
    }
];
export const getUsers=(req, res) => {
    return res.send(users);
 };


 
 export const singleUser=(req,res)=>{
     const id=req.params.id;
     const user=users.find((u)=>u.id===id);
     if(!user){
          res.status(400).send("User not found!");
     }
     res.send(user);
 }
 let nextId =2;
 export const createUser=(req,res)=>{
  const {email,password,name,country,telno}=req.body;
  const user={
     id:`${++nextId}`,
     name:name,
     email:email,
     password:password,
     country:country,
     telno:telno,
   
  };
  users.push(user);
  res.send("New User Created");
 }
 
 export const deleteUser=(req,res)=>{
 const id=req.params.id;
 const user=users.find((u)=>u.id===(id));
 
 if(!user){
   return  res.status(400).send("User not found");
 }
 users=users.filter((u)=>u.id !==(id));
 res.send(users);
 nextId--;
 }
 
 export const updateUser=(req,res)=>{
     const id=req.params.id;
     const user=users.find((u)=>u.id===(id));
     const {name,email,country,telno,password,role}=req.body;
     if(!user){
         res.status(400).send("User not found!");
     } 
     user.name=name;
     user.email=email;
     user.country=country;
     user.telno=telno;
     user.password=password;
     user.role=role;
     

     
     res.send("Updadet User");
 }