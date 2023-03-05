import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import Alert from '../components/Alert';

export default function RootLayout(props) {
  return (
    <>
        {/* Navbar is component , title and about is props*/}
        <Navbar title={ props.title } about={ props.about } toggleMode={ props.toggleMode }/>
        <Alert alert={ props.alert }/>
        <Outlet/>
    </>
  )
}
