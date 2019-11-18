import React, { Component } from "react";

import AdoptMain from "../../Components/AdoptMain/AdoptMain";
import ApiContext from "../../Contexts/ApiContext";

export default class adoptDog extends Component {
	static contextType = ApiContext;

	//pass list into adopt main
	render() {
    if (this.context.dogList.length === 0) {
      return null;
    }
    else {
      console.log('dogList passed in context in `AdoptDogs`', this.context.dogList);
      return (
        <>
          <AdoptMain petType='dog' petList={this.context.dogList} />
        </>
      );
    }
	}
}