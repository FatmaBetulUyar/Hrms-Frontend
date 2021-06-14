import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobTitleService from '../services/jobTitleService'
export default function JobTitleList() {

    const [jobTitles, setJobTitles] = useState([])
    useEffect(()=>{
        let jobTitleService=new JobTitleService()
        jobTitleService.getJobTitles().then(result=>setjobTitles(result.data.data))
    },[])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
                        {jobTitles.map(jobTitle => (
                            <Table.Row key={jobTitle.id}>
                                <Table.Cell>{jobTitle.titleName}</Table.Cell>
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
