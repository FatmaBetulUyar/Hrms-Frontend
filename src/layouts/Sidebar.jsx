import React from 'react'
import { Menu } from 'semantic-ui-react'
export default function Sidebar() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='Is Arayanlar'
                />
                <Menu.Item
                    name='Is Verenler'
                />
                <Menu.Item
                    name='Is Pozisyonları'
                />
                <Menu.Item
                    name='CV'
                />
            </Menu>
        </div>
    )
}
