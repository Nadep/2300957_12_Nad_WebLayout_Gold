import NavbarComponent from "../navbar";
import FormComponent from "../form";

export default function Layout({children}){
  return (
    <>
      <NavbarComponent />
      <FormComponent />
      {children}
    </>
  )
}