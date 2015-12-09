xtag.register('p-panel', {
            
    accessors: {
        toggleable: {
            attribute: {
                boolean: true
            }
        },
        toggleDuration: {
            attribute: {
                name: 'toggleduration'
            }
        },
        toggleOrientation: {
            attribute: {
                name: 'toggleorientation'
            }
        },
        collapsed: {
            attribute: {
                boolean: true
            }
        },
        closable: {
            attribute: {
                boolean: true
            }
        },
        closeDuration: {
            attribute: {
                name: 'closeduration'
            }
        },
        title: {
            attribute: {}
        },
        onBeforeClose: {
            attribute: {
                name: 'onbeforeclose'
            }
        },
        onAfterClose: {
            attribute: {
                name: 'onafterclose'
            }
        },
        onBeforeCollapse: {
            attribute: {
                name: 'onbeforecollapse'
            }
        },
        onAfterCollapse: {
            attribute: {
                name: 'onaftercollapse'
            }
        },
        onBeforeExpand: {
            attribute: {
                name: 'onbeforeexpand'
            }
        },
        onAfterExpand: {
            attribute: {
                name: 'onafterexpand'
            }
        }
        
    },
    
    lifecycle: {
        
        created: function() {
            var $this = this,
            options = {
                title: this.title,
                toggleable: this.toggleable,
                toggleDuration: this.toggleDuration||'normal',
                toggleOrientation: this.toggleOrientation||'vertical',
                collapsed: this.collapsed,
                closable: this.closable,
                closeDuration: this.closeDuration||'slow'
            };
    
            if(this.beforeClose) options.beforeClose = function(event) {PUI.executeFunctionByName($this.beforeClose, window, event);};
            if(this.afterClose) options.afterClose = function(event) {PUI.executeFunctionByName($this.afterClose, window, event);};
            if(this.beforeCollapse) options.beforeCollapse = function(event) {PUI.executeFunctionByName($this.beforeCollapse, window, event);};
            if(this.afterCollapse) options.afterCollapse = function(event) {PUI.executeFunctionByName($this.afterCollapse, window, event);};
            if(this.beforeExpand) options.beforeExpand = function(event) {PUI.executeFunctionByName($this.beforeExpand, window, event);};
            if(this.afterExpand) options.afterExpand = function(event) {PUI.executeFunctionByName($this.afterExpand, window, event);};
            
            $(this).contents().wrapAll('<div></div>');
            $(this.children[0]).puipanel(options);
        }
        
    },
    
    methods: {

    }
});