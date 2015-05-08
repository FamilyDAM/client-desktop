/*
 * This file is part of FamilyDAM Project.
 *
 *     The FamilyDAM Project is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     The FamilyDAM Project is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with the FamilyDAM Project.  If not, see <http://www.gnu.org/licenses/>.
 */

/** @jsx React.DOM */
// Renders the todo list as well as the toggle all button
// Used in TodoApp
var React = require('react');
var Router = require('react-router');
var IS = require('is_js');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Table = require('react-bootstrap').Table;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var Button = require('react-bootstrap').Button;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var Glyphicon = require('react-bootstrap').Glyphicon;
var ButtonLink = require('react-router-bootstrap').ButtonLink;
var SectionTree = require('../../components/folderTree/SectionTree');


var NodeActions = require('../../actions/NodeActions');
var FileActions = require('../../actions/FileActions');
var DirectoryActions = require('../../actions/DirectoryActions');
var NavigationActions = require('../../actions/NavigationActions');

var FileStore = require('./../../stores/FileStore');


var FilesView = React.createClass({
    mixins : [Navigation],


    getInitialState: function(){
        return {
            files:[],
            selectedItem: undefined };
    },



    componentWillMount:function(){
        console.log("{FilesView} componentWillMount");
        console.dir( DirectoryActions.selectFolder );
        console.dir( FileActions.getFiles );
        console.dir( this.state );

        //todo: make path dynamic
        var _this = this;
        this.state.path = "/dam:files/";

        if( this.props.query && this.props.query.path )
        {
            this.state.path = this.props.query.path;
        }

        // save current dir
        //DirectoryActions.selectFolder.onNext(this.state.path);
        // load files
        FileActions.getFiles.source.onNext(this.state.path);


        // rx callbacks
        FileStore.files.subscribe(function(data_){
            _this.state.files = data_;
            if (_this.isMounted())  _this.forceUpdate();
        });
    },

/**
    componentDidMount: function()
    {
        // update the breadcrumb
        var _pathData = {'label':'Files', 'navigateTo':"files", 'params':{}, 'level':1};
        NavigationActions.currentPath.onNext( _pathData );
    },


    componentWillReceiveProps:function(nextProps)
    {
        this.state.path = nextProps.query.path;
        // save current dir
        DirectoryActions.selectFolder.onNext(_path);
        // load files
        FileActions.getFiles.source.onNext(nextProps.query.path);
    },
**/

    handleDirClick: function(event, component)
    {
        var _path =  $("[data-reactid='" + component + "']").attr("data-path");

        // save current dir
        //DirectoryActions.selectFolder.onNext(_path);
        // load files
        //FileActions.getFiles.source.onNext(nextProps.query.path);

        //this.transitionTo('files', {}, {'path':_path})
    },
    
    
    handleRowClick: function(event, component)
    {
        if( $(event.target).attr('type') != "button" )
        {
            $(".active").removeClass();
            $(event.currentTarget).addClass("active");
            var _id = $("[data-reactid='" + component + "']").attr("data-id");
            if( this.isMounted() ) this.setState({selectedItem: _id});
        }

        // IF DBL CLick
        //var _id = $( "[data-reactid='" +component +"']" ).attr("data-id");
        //transitionTo('photoDetails', {'photoId': _id});
    },


    handleNodeDelete: function(event, component)
    {
        var _this = this;
        event.nativeEvent.stopImmediatePropagation();
        
        var _id = $("[data-reactid='" + component + "']").attr("data-id");
        var _path = $("[data-reactid='" + component + "']").attr("data-path");

        //NodeActions.deleteNode.source.onNext(_id);

        //register as a listener so we can cut out the file that was deleted
        /** deprecated?
        NodeActions.deleteNode.sink.subscribe(function(results_){
            console.log("** delete by by id **** ")
            console.dir(results_);

            for (var i = 0; i < _this.state.files.length; i++)
            {
                var obj = _this[i];
                var _id = _this.state.files[i].id;
                if( _id == results_ )
                {
                    _this.state.files.splice(i, 1);
                    _this.forceUpdate();
                    break;
                }
            }
        });
         **/
    },


    render: function() {

        var _this = this;
        var tableClass = "col-sm-9 col-md-9";
        var asideClass = "hidden col-md-3";
        var previewWidget = <span>
                                [preview panel = {this.state.selectedItem}]
                            </span>;

        if( this.state.selectedItem !== undefined )
        {
            tableClass = "col-sm-9 col-md-6";
            asideClass = "col-md-3";
        };




        var folders = this.state.files
            .filter( function(_file){
                return _file._class == "com.familydam.core.models.Directory";
            } )
            .map( function(_file){
                return <tr key={_file.id} onClick={_this.handleDirClick}  data-id={_file.id}  data-path={_file.path}>
                        <td>
                            <img src="assets/icons/ic_folder_48px.svg"
                                 style={{'width':'48px', 'height':'48px', 'margin':'auto', 'cursor': 'pointer'}}/>
                        </td>
                        <td className="fileName" 
                            style={{'verticalAlign':'middle', 'cursor': 'pointer'}}>{_file.name}</td>
                        <td >
                            <ButtonGroup  bsSize="small" style={{'width':'250px','verticalAlign':'middle'}}>
                                {_file.mixins.indexOf("dam:userfolder")>-1?
                                <Button onClick={_this.handleNodeDelete} data-id={_file.id} data-path={_file.path}  style={{'padding':'5px 10px', 'margin':0}}>
                                    <Glyphicon glyph="remove"/> delete
                                </Button>
                                :""}
                            </ButtonGroup>
                        </td>
                    </tr>

        });

        var files = this.state.files
            .filter( function(file_){
                return file_._class == "com.familydam.core.models.File";
            } )
            .map( function(_file){
                return <tr key={_file.id}  data-id={_file.id}>
                        <td>
                            <Link to="photoDetails" params={{'id': _file.id}}>
                            <img src={PreferenceStore.getBaseUrl() +_file.path.replace("dam:files", "~") +"?rendition=thumbnail.200&token=" +UserStore.getToken()}
                                 style={{'width':'50px', 'height':'50px'}}/></Link>
                        </td>
                        <td className="fileName"><Link to="photoDetails" params={{'id': _file.id}}>{_file.name}</Link></td>
                        <td >
                            { _file.mixins.indexOf("dam:image") > -1 ?
                            <ButtonGroup  bsSize="small" style={{'width':'250px','verticalAlign':'middle'}}>
                                <ButtonLink to="photoDetails" params={{'id': _file.id}}  style={{'padding':'5px 10px', 'margin':0}}>
                                    <Glyphicon glyph="eye-open"/> view
                                </ButtonLink>
                                <ButtonLink to="photoEdit" params={{id: _file.id}}  style={{'padding':'5px 10px', 'margin':0}}>
                                    <img src="assets/icons/ic_mode_edit_24px.svg" style={{'width':'14px', 'height':'14px', 'margin':'auto'}}/> edit
                                </ButtonLink>
                                <Button onClick={_this.handleNodeDelete} data-id={_file.id} data-path={_file.path}  style={{'padding':'5px 10px', 'margin':0}}>
                                    <Glyphicon glyph="remove"/> delete
                                </Button>
                            </ButtonGroup>
                            :
                            <ButtonGroup  bsSize="small">
                                <Button onClick={_this.handleNodeDelete} data-id={_file.id} data-path={_file.path}>
                                    <Glyphicon glyph="remove"/> delete
                                </Button>
                            </ButtonGroup>
                            }
                        </td>
                    </tr>

        });


        return (
            <div className="filesView container-fluid" >
                <div  className="row">
                    <aside className="col-sm-3" >
                        <SectionTree title="Files" showAddFolder={true} navigateToFiles={true} baseDir="/dam:files/"/>
                        <SectionTree title="Photos" disabled={true}/>
                        <SectionTree title="Music" disabled={true}/>
                        <SectionTree title="Movies" disabled={true}/>
                        <SectionTree title="Email Archive" disabled={true}/>
                        <SectionTree title="Web Archive" disabled={true}/>
                    </aside>

                    <section className={tableClass} style={{'borderLeft':'1px solid #eee'}}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th style={{width:"90%"}}>Name</th>
                                    <th style={{"minWidth":"100px"}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {folders}
                                
                                {files}
                            </tbody>
                        </Table>
                    </section>

                    <aside className={asideClass}>
                    {previewWidget}
                    </aside>
                </div>
            </div>

        );
    }

});

module.exports = FilesView;
