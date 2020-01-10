import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Spin, message } from 'antd'

import styles from './index.css';

const { Footer, Sider, Content } = Layout
const mapStateToProps = (state, ownProps) => ({
    playlist: state.playlist,
    user: state.user
})

class App extends Component {
    render() {
        return (
            <Layout className={styles.container} style={{height:'100%',backgroundColor:'#ff0'}}>
                <Layout>
                    {/* 除去播放栏的整体布局 */}
                    <Sider className={styles.sider}>
                        {/* 侧边 */}
                        <h1>侧边</h1>

                    </Sider>
                    <Layout>
                        {/* 右侧container */}
                        <Content className={styles.content}>
                            <h1>content</h1>
                            {/* <Switch>
                <Route exact path='/' Component={() => <Redirect to='/central' />} />
                <Route path='/central' Component={MusicCentral} />
              </Switch> */}
                        </Content>
                    </Layout>
                </Layout>
                <Footer className={styles.footer}>
                    {/* 播放栏 */}
                    <h1>footer</h1>
                </Footer>
            </Layout>
        )
    }

}

export default App;