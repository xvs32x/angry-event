import { initialState } from "../states/project";
import { ProjectStateI } from "../interfaces/project-state";
import { createFeatureSelector } from "@ngrx/store";
import { projectAdapter } from "../entities/project.entity";

export function projectReducer(state = initialState, action): ProjectStateI {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export const selectProjectState = createFeatureSelector<ProjectStateI>('project');

export const { selectAll: selectAllProjects } = projectAdapter.getSelectors(selectProjectState);