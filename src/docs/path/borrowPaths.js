/**
 * @swagger
 * /borrow:
 *   get:
 *     summary: Get all borrowings
 *     description: Retrieve the list of all borrowings in the system.
 *     tags:
 *       - Borrowings
 *     responses:
 *       '200':
 *         description: A list of borrowings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Borrowing'
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /borrow/{id}:
 *   get:
 *     summary: Get borrowing details by ID
 *     description: Retrieve borrowing details by borrowing ID.
 *     tags:
 *       - Borrowings
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: The UUID of the borrowing record to retrieve
 *     responses:
 *       '200':
 *         description: Borrowing details found successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Borrowing'
 *       '404':
 *         description: Borrowing record not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /borrow/return/{id}:
 *   put:
 *     summary: Return a book
 *     description: Update the reservation status of a book and send a message to RabbitMQ.
 *     tags:
 *       - Borrowings
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The UUID of the borrow being returned
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: The book has been successfully returned.
 *       '400':
 *         description: Invalid input data.
 *       '404':
 *         description: Book not found.
 *       '500':
 *         description: Internal server error.
 */
