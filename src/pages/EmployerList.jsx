import React, { useState ,useEffect} from 'react'
import EmployerService from '../services/employerService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
export default function EmployerList() {

    const [employers, setEmployers] = useState([])
    useEffect(()=>{
        let employertService=new EmployerService()
        employertService.getEmployers().then(result=>setEmployers(result.data.data))
    },[])

    return (
        
        
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>email</Table.HeaderCell>
                        <Table.HeaderCell>password</Table.HeaderCell>
                        <Table.HeaderCell>companyName</Table.HeaderCell>
                        <Table.HeaderCell>phoneNumber</Table.HeaderCell>
                        <Table.HeaderCell>webAddress</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                        {employers.map(employer => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.password}</Table.Cell>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{employer.webAddress}</Table.Cell>
                            </Table.Row>
                        ))}
                    

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>

        </div>
    )
}
