import React from 'react'
import { Menu } from 'semantic-ui-react'
export default function Sidebar() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='Anasayfa'

                />
                <Menu.Item
                    name='messages'

                />
                <Menu.Item
                    name='friends'

                />
            </Menu>
        </div>
    )
}
