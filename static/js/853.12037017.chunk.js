"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[853],{1735:function(n,e,t){t.d(e,{AK:function(){return m},pp:function(){return p},sG:function(){return u},tN:function(){return l}});var r,a,o,i,s=t(168),c=t(5867),d=t(5705),l=(0,c.ZP)(d.l0)(r||(r=(0,s.Z)(["\n  width: 600px;\n  height: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  padding: 20px;\n  background-color: ",";\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px black;\n\n  & label {\n    font-weight: bold;\n    position: relative;\n    width: 500px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 5px;\n  }\n"])),(function(n){var e=n.name;return n.theme.height[e]}),(function(n){return n.theme.colors.main})),u=(0,c.ZP)(d.gN)(a||(a=(0,s.Z)(["\n  width: 80%;\n  height: 30px;\n  padding: 1px 5px;\n  font-size: 100%;\n  font-weight: inherit;\n  border-radius: 5px;\n"]))),m=(0,c.ZP)(d.Bc)(o||(o=(0,s.Z)(["\n  position: absolute;\n  top: calc(100% + 5px);\n  right: 0;\n  width: 100%;\n  text-align: center;\n  padding: 2px 10px;\n  color: #9a0c0c;\n  background-color: #ffffff8b;\n  font-size: 12px;\n  border-radius: 5px;\n"]))),p=c.ZP.button(i||(i=(0,s.Z)(["\n  width: 90%;\n  height: 40px;\n  font-size: inherit;\n  font-weight: bold;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  box-shadow: 3px 3px 10px #000000be;\n  outline: none;\n  transition: all 200ms;\n  &:hover {\n    background-color: #02f7f7;\n    scale: 1.03;\n  }\n  &:active {\n    scale: 1.01;\n  }\n"])))},8417:function(n,e,t){t.d(e,{IY:function(){return a},Tu:function(){return i},pj:function(){return o}});var r=t(6727),a=r.Ry().shape({name:r.Z_().min(2,"Too Short!").max(50,"Too Long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required"),number:r.Z_().min(2,"Too Short!").max(30,"Too Long!").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),o=r.Ry().shape({email:r.Z_().email().max(255).required("Email is required"),password:r.Z_().min(8,"At least 8 symbols").max(255,"It's too long").required("Password is required")}),i=r.Ry().shape({name:r.Z_().min(2,"Too Short!").max(50,"Too Long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required"),email:r.Z_().email().max(255).required("Required"),password:r.Z_().min(8,"At least 8 symbols").max(255,"It's too long").required("Required")})},853:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(5705),a=t(6153),o=t.n(a),i=t(9434),s=t(8417),c=t(9273),d=t(2946),l=t(1735),u=t(3329),m={name:"",email:"",password:""};function p(){var n=(0,i.I0)(),e=(0,i.v9)(d.xU);return(0,u.jsx)(r.J9,{initialValues:m,onSubmit:function(e,t){var r=e.name,a=e.email,o=e.password,i=t.resetForm;console.log(r,a,o),n((0,c.z2)({name:r,email:a,password:o})),i()},validationSchema:s.Tu,children:(0,u.jsxs)(l.tN,{name:"register",children:[(0,u.jsxs)("label",{children:["Name",(0,u.jsx)(l.sG,{type:"text",name:"name",placeholder:"Enter your name"}),(0,u.jsx)(l.AK,{name:"name",component:"div"})]}),(0,u.jsxs)("label",{children:["Email",(0,u.jsx)(l.sG,{type:"email",name:"email",placeholder:"abc@email.com"}),(0,u.jsx)(l.AK,{name:"email",component:"div"})]}),(0,u.jsxs)("label",{children:["Password",(0,u.jsx)(l.sG,{type:"password",name:"password",placeholder:"minimum 8 symbols"}),(0,u.jsx)(l.AK,{name:"password",component:"div"})]}),(0,u.jsx)(l.pp,{type:"submit",disabled:e,children:e?(0,u.jsx)(o(),{radius:25,color:"#333",stroke:3,visible:!0}):"Register"})]})})}function h(){return(0,u.jsx)(p,{})}},2946:function(n,e,t){t.d(e,{AD:function(){return a},Af:function(){return o},DI:function(){return s},xU:function(){return i}});var r=t(6916),a=function(n){return n.filter},o=function(n){return n.contacts.items},i=function(n){return n.contacts.isLoading},s=(0,r.P1)([o,a],(function(n,e){return n.filter((function(n){return(n.name+n.number).toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=853.12037017.chunk.js.map