class Developer {
  // write your solution here
  constructor(name) {
    this.name = name;
    this.skills = [];
    this.frameworks = [];
    this.me = this;
  }

  addSkill(skill) {
    if (!this.skills.includes(skill)) {
      this.skills.push(skill);
    } else {
      throw new Error("Already exists");
    }
    return this;
  }

  addFramework(framework) {
    if (!this.frameworks.includes(framework)) {
      this.frameworks.push(framework);
    } else {
      throw new Error("Already exists");
    }
    return this;
  }

  getSkills() {
    return this.skills.join(",");
  }

  getFrameworks() {
    return this.frameworks.join(",");
  }

  hasSkill(skill) {
    return this.skills.includes(skill);
  }

  removeSkill(skill) {
    const indexVal = this.skills.indexOf(skill);
    this.skills.splice(indexVal, 1);
    return this;
  }

  removeFramework(framework) {
    const indexVal = this.frameworks.indexOf(framework);
    this.frameworks.splice(indexVal, 1);
    return this;
  }
}

/*********************************** */
/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * You function/class name should be `Developer` only.
 **/

class Developer {
  constructor(name) {
    this.name = name;
    this.skills = [];
    this.frameworks = [];
  }

  addSkill(skillParam) {
    if (
      typeof skillParam !== "string" ||
      skillParam.trim() === "" ||
      this.skills.find((skill) => skill === skillParam)
    ) {
      throw new Error("Invalid Skill");
    }
    this.skills.push(skillParam);

    return this;
  }

  addFramework(frameworkParam) {
    if (
      typeof frameworkParam !== "string" ||
      frameworkParam.trim() === "" ||
      this.frameworks.find((skill) => skill === frameworkParam)
    ) {
      throw new Error("Invalid Framewirk");
    }

    this.frameworks.push(frameworkParam);

    return this;
  }

  hasSkill(skillParam) {
    return this.skills.find((skill) => skill === skillParam) ? true : false;
  }

  removeSkill(skillParam) {
    this.skills = this.skills.filter((skill) => skill !== skillParam);
    return this;
  }

  removeFramework(frameworkParam) {
    this.frameworks = this.frameworks.filter(
      (framwork) => framwork !== frameworkParam
    );
    return this;
  }

  getSkills() {
    return this.skills;
  }

  getFrameworks() {
    return this.frameworks;
  }
}
