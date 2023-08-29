import React from "react";
import classObject from "./UserContact.module.css";

import Input from "../UI/Input";
import Button from "../UI/Button";

const UserContact = () => {
  return (
    <section className={classObject.userContact}>
      <div className={classObject.userContactContainer}>
        <div className={classObject.userContactTop}>
          <div className={classObject.userContactTopContainer}>
            <span>🛎️ Want a expert?</span>
            <span>
              Get our customer support for free. We would help you out!!!💡
            </span>
            <span>
              Download our <a href="">Brochure</a>
            </span>
          </div>
        </div>
        <div className="userContactBottom">
          <div className={classObject.userContactBottomContainer}>
            <div className={classObject.userBottomTop}>
              <h4>Discuss Your Unique Requirements With Us</h4>
            </div>
            <div className={classObject.userBottomDown}>
              <form action="" className="userForm">
                <div className={classObject.formContainer}>
                  <div className={classObject.inputWrapper}>
                    <Input placeholder="First Name *" />
                    <Input placeholder="Last Name " />
                   
                  </div>
                  <div className={classObject.inputWrapper}>
                    <Input placeholder="Phone *" />
                    <Input placeholder="Email " />
                  </div>
                  <div className={classObject.inputWrapper}>
                    <Input placeholder="Message" />
                  </div>
                  <div className={`${classObject.inputWrapper} ${classObject.inputCheckBox}`}>
                    <div className="inputCheckBoxControl">
                      <input type="checkbox"  />
                    </div>
                    <div className="inputCheckBoxText">
                      <span>
                        I Have read all the terms & Condition of
                        <span style={{ color: "#BEA704", margin:'0 0 0 5px' }}>
                           GRANDEUR LIVING
                        </span> 
                      </span>
                    </div>
                  </div>
                  <div className={classObject.in}>
                    <Button>
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserContact;
