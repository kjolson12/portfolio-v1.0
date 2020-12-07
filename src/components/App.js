import React from 'react';

import './App.css';
import Main from './main/Main';
import Bio from './bio/Bio';
import SkillList from './skills/SkillList';
import ToolList from './tools/ToolList';
import ProjectList from './projects/ProjectList';
import Contact from './contact/Contact';

class App extends React.Component {
    state = { theme: 'Light' }

    toggleTheme = () => {
        if (this.state.theme === 'Light') {
            this.setState({ theme: 'Dark' });
        } else if (this.state.theme === 'Dark') {
            this.setState({ theme: 'Light' })
        }
    }

    themeClassName = (lightParam, darkParam) => {
        return this.state.theme === 'Light' ? lightParam : darkParam;
    };

    render() {
        return (
            <div className={this.themeClassName('light', 'dark')}>
                <Main
                    toggleTheme={this.toggleTheme}
                    themeClassName={this.themeClassName}
                />
                <br />
                <Bio />
                <br />
                <SkillList themeClassName={this.themeClassName} />
                <br />
                <ToolList themeClassName={this.themeClassName} themeState={this.state.theme} />
                <br />
                <ProjectList themeClassName={this.themeClassName} />
                <br />
                <Contact />
            </div>
        );
    }
}

export default App;