import { useEffect, useState } from "react";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobSeekerService from "../services/jobSeekerService";


export default function JobSeekerList() {
    
    const[jobSeekers, setJobSeekers]=useState([])

    useEffect(()=>{
        let jobSeekerService=new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result=>setJobSeekers(result.data.data))
    },[])

    

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>email</Table.HeaderCell>
                    <Table.HeaderCell>Şifre</Table.HeaderCell>
                        <Table.HeaderCell>Ad</Table.HeaderCell>
                        <Table.HeaderCell>Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Tc no</Table.HeaderCell>
                        <Table.HeaderCell>Doğum tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekers.map(jobSeeker => (
                            <Table.Row key={jobSeeker.id}>
                                  <Table.Cell>{jobSeeker.email}</Table.Cell>
                                  <Table.Cell>{jobSeeker.password}</Table.Cell>
                                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                                <Table.Cell>{jobSeeker.identityNumber}</Table.Cell>
                                <Table.Cell>{jobSeeker.birthDate} </Table.Cell> 
                            </Table.Row>
                        ))
                    }

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
                                <Menu.Item as='a'>5</Menu.Item>
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