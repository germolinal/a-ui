/* eslint-disable */

/* DIRECTIVES */
/**************/
import Fluid from "./directives/fluid";
import Row from "./directives/row";
import Selected from "./directives/selected";
import Container from "./directives/container";
import Verbatim from "./directives/verbatim";

/* COMPONENTS */
/**************/

import Button from "./components/buttons/button";
import RaisedButton from "./components/buttons/raised-button";
import Dialog from "./components/dialog/dialog";
import HSVColorPick from "./components/color-pick/hsv-color-pick";
import Input from "./components/input/input";
import Select from "./components/select/select";
import SideNav from "./components/sidenav/sidenav";
import SideNavItem from "./components/sidenav/sidenav-item";
import NavBar from "./components/navbar/navbar";
import Link from "./components/link/link";

const prefix="a";

export default {
    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue, options) {
        
      /* DIRECTIVES */
      /**************/
      Vue.directive('fluid',Fluid);
      Vue.directive('row',Row);
      Vue.directive('selected',Selected);
      Vue.directive('container',Container);
      Vue.directive('verbatim',Verbatim);

      
      /* COMPONENTS */
      /**************/
      Vue.component(prefix+'-button',Button);
      Vue.component(prefix+'-raised-button',RaisedButton);
      Vue.component(prefix+'-dialog',Dialog);
      Vue.component(prefix+'-hsv-color-pick',HSVColorPick);
      Vue.component(prefix+'-input',Input);
      Vue.component(prefix+'-select',Select);
      Vue.component(prefix+'-sidenav',SideNav);
      Vue.component(prefix+'-sidenav-item',SideNavItem);
      Vue.component(prefix+'-navbar',NavBar);
      Vue.component(prefix+'-link',Link);






      // We call Vue.mixin() here to inject functionality into all components.
        Vue.mixin({
        // Anything added to a mixin will be injected into all components.
        // In this case, the mounted() method runs when the component is added to the DOM.
        mounted() {
          
        }
      });
    }
  };
  