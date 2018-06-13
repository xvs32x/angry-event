import { ProjectStateI } from "../interfaces/project-state";
import { projectAdapter } from "../entities/project.entity";

export const initialState: ProjectStateI = projectAdapter.getInitialState({
    // additional entity state properties
})