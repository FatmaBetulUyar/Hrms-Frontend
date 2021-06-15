import React from 'react'
import { Menu, Segment, Container} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Segment inverted fixed="top">
                <Menu inverted pointing secondary>
                    <Container>
                        <Menu.Item
                            name='HRMS'
                        />
                        <Menu.Item
                            name='Aktif İş İlanları'
                        />
                        <Menu.Item
                            name='Ana Sayfa'
                        />

                     <Menu.Item position='right'>
                            <Input className='icon' icon='search' placeholder='Search...' />
                        </Menu.Item> 

                        <Menu.Item position='right'>
                            <Button primary>Sign up</Button>
                        </Menu.Item>

                        <Menu.Item>
                            <Button>Log-in</Button>
                        </Menu.Item>
                    </Container>

                </Menu>

            </Segment>

        </div>
    )
}
