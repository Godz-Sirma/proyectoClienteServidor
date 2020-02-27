<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Clase;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Clase controller.
 *
 * @Route("clase")
 */
class ClaseController extends Controller
{
    /**
     * Lists all clase entities.
     *
     * @Route("/", name="clase_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $clases = $em->getRepository('AppBundle:Clase')->findAll();

        return $this->render('clase/index.html.twig', array(
            'clases' => $clases,
        ));
    }

    /**
     * Creates a new clase entity.
     *
     * @Route("/new", name="clase_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $clase = new Clase();
        $form = $this->createForm('AppBundle\Form\ClaseType', $clase);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($clase);
            $em->flush();

            return $this->redirectToRoute('clase_show', array('id' => $clase->getId()));
        }

        return $this->render('clase/new.html.twig', array(
            'clase' => $clase,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a clase entity.
     *
     * @Route("/{id}", name="clase_show")
     * @Method("GET")
     */
    public function showAction(Clase $clase)
    {
        $deleteForm = $this->createDeleteForm($clase);

        return $this->render('clase/show.html.twig', array(
            'clase' => $clase,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing clase entity.
     *
     * @Route("/{id}/edit", name="clase_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Clase $clase)
    {
        $deleteForm = $this->createDeleteForm($clase);
        $editForm = $this->createForm('AppBundle\Form\ClaseType', $clase);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('clase_edit', array('id' => $clase->getId()));
        }

        return $this->render('clase/edit.html.twig', array(
            'clase' => $clase,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a clase entity.
     *
     * @Route("/{id}", name="clase_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Clase $clase)
    {
        $form = $this->createDeleteForm($clase);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($clase);
            $em->flush();
        }

        return $this->redirectToRoute('clase_index');
    }

    /**
     * Creates a form to delete a clase entity.
     *
     * @param Clase $clase The clase entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Clase $clase)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('clase_delete', array('id' => $clase->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
