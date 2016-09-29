import { ElementViewTemplate } from '../../diagram/templatedElementView';
// import { getDefaultTemplate } from './reactDefaultTemplate';
import { LEFT_BAR_TEMPLATE, BIG_ICON_TEMPLATE, PERSON_TEMPLATE, ORGANIZATION_TEMPLATE } from './stringTemplates';

export type TemplateResolver = (types: string[]) => ElementViewTemplate;

export const DEFAULT_TEMPLATE_BUNDLE: TemplateResolver[] = [
    types => {
        if (types.indexOf('http://www.w3.org/2000/01/rdf-schema#Class') !== -1) {
            return BIG_ICON_TEMPLATE;
        } else {
            return undefined;
        }
    },
    types => {
        if (types.indexOf('http://www.w3.org/2002/07/owl#Class') !== -1) {
            return BIG_ICON_TEMPLATE;
        } else {
            return undefined;
        }
    },
    types => {
        if (types.indexOf('http://www.w3.org/2002/07/owl#ObjectProperty') !== -1) {
            return LEFT_BAR_TEMPLATE;
        } else {
            return undefined;
        }
    },
    types => {
        if (types.indexOf('http://www.w3.org/2002/07/owl#DatatypeProperty') !== -1) {
            return LEFT_BAR_TEMPLATE;
        } else {
            return undefined;
        }
    },
    types => {
        if (types.indexOf('http://xmlns.com/foaf/0.1/Person') !== -1) {
            return PERSON_TEMPLATE;
        } else {
            return undefined;
        }
    },
    types => {
        if (types.indexOf('http://schema.org/Organization') !== -1 ||
            types.indexOf('http://dbpedia.org/ontology/Organisation') !== -1 ||
            types.indexOf('http://xmlns.com/foaf/0.1/Organisation') !== -1
        ) {
            return ORGANIZATION_TEMPLATE;
        } else {
            return undefined;
        }
    },
];