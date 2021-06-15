import React from 'react'
import { useEffect, useState } from "react";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import SystemPersonelService from '../services/systemPersonelService' 

export default function SystemPersonelList() {
    const [systemPersonels, setSystemPersonels] = useState([])
    useEffect(()=>{
        let systemPersonelService=new SystemPersonelService()
        systemPersonelService.getSystemPersonels().then(result=>setSystemPersonels(result.data.data))
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
                       
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        systemPersonels.map(systemPersonel => (
                            <Table.Row key={systemPersonel.id}>
                                  <Table.Cell>{systemPersonel.email}</Table.Cell>
                                  <Table.Cell>{systemPersonel.password}</Table.Cell>
                                <Table.Cell>{systemPersonel.firstName}</Table.Cell>
                                <Table.Cell>{systemPersonel.lastName}</Table.Cell>
                              
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
