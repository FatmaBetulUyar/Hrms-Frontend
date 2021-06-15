import React from 'react'
import JobSeekerList from '../pages/JobSeekerList'
import EmployerList from '../pages/EmployerList'
import SystemPersonelList from '../pages/SystemPersonelList'
import JobTitleList from '../pages/JobTitleList'
import { Grid } from 'semantic-ui-react'
import Sidebar from './Sidebar'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar></Sidebar>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <EmployerList></EmployerList>
                        <JobSeekerList></JobSeekerList>
                        <SystemPersonelList></SystemPersonelList>
                        <JobTitleList></JobTitleList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
