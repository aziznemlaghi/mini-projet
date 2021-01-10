import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[];
  constructor() {
    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'omar ben ali',
        role :'directeur general',
        prixProduit: 3000,
        dateCreation: new Date('01/14/2011'),
      },
      {
        idProduit: 2,
        nomProduit: 'samia trabelsi',
        role :'responsable ressources humaines',
        prixProduit: 4500,
        dateCreation: new Date('12/17/2010'),
      },
      {
        idProduit: 3,
        nomProduit: 'anis benchouikha',
        role :'ouvrier',
        prixProduit: 900,
        dateCreation: new Date('02/20/2020'),
      },
    ];
  }

  listeProduits(): Produit[] {
    return this.produits;
  }
  ajouterProduits(prod: Produit) {
    this.produits.push(prod);
  }
  supprimerProduit(prod: Produit) {
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }
  consulterProduit(id: number): Produit {
    return this.produits.find((p) => p.idProduit == id);
  }
  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      }
      if (n1.idProduit < n2.idProduit) {
        return -1;
      }
      return 0;
    });
  }
  updateProduit(p: Produit) {
    this.supprimerProduit(p);
    this.ajouterProduits(p);
    this.trierProduits();
  }
}
