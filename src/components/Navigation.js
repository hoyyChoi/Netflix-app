import React, {useState}from 'react'
import {Navbar, Container, Form, Button, Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const Navigation = () => {

  const navigate = useNavigate()
  const [event,setEvent] = useState('')

  const search = (e) =>{
    //e.preventDefault()
    setEvent(e.target.value)
    
    if(e.key =="Enter"){
        navigate(`/movies?q=${e.target.value}`)
    }
}

  const spaceSearch =()=>{
    navigate(`/movies?q=${event}`)
  }


  return (
    <Navbar bg="black" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img width={100} src='https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/movies" className='nav-item'>Movies</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>search(e)}
            />
             {/* <input type="text" style={{border:"none", marginLeft:"5px", fontSize:"16px"}} placeholder='제품검색' onChange={(e)=>search(e)}></input> */}
            <Button variant="outline-danger" onClick={spaceSearch}><FaSearch/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation