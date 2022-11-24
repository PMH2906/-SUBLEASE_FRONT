import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHeart as fasHeart, faSquareParking as faSquareParking, faHouseChimneyCrack as faHouseChimneyCrack,faCouch as faCouch, faPaw as faPaw} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

library.add(fasHeart, farHeart,faSquareParking,faHouseChimneyCrack,faCouch,faPaw);

Vue.component("font-awesome-icon", FontAwesomeIcon);
