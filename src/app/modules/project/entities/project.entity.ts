import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProjectI } from '../interfaces/project';
import { createFeatureSelector } from '@ngrx/store';
import { ProjectStateI } from '../interfaces/project-state';

export function sortProjects(a: ProjectI, b: ProjectI): number {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    return 0;
}

export const projectAdapter: EntityAdapter<ProjectI> = createEntityAdapter<ProjectI>({
    selectId: project => project.id,
    sortComparer: sortProjects
})
