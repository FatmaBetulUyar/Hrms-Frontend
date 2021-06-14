import React from 'react'
import { Menu, Segment, Container} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Container>
                        <Menu.Item
                            name='İş Arayanlar'
                        />
                        <Menu.Item
                            name='İş Verenler'
                        />
                        <Menu.Item
                            name='İş ilanları'
                        />

                    {/* <Menu.Item position='right'>
                            <Input className='icon' icon='search' placeholder='Search...' />
                        </Menu.Item> */}

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
