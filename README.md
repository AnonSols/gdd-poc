
# **Drag and Drop PoC with Resizable Components**

## **Project Overview**

This is a sophisticated Proof of Concept (PoC) that demonstrates drag-and-drop functionality integrated with resizable components. The project aims to showcase advanced interactions such as resizing, dragging components into a container, and preventing collisions. The implementation utilizes the **`react-dnd`** library for drag-and-drop functionality and **`react-resizable`** for resizable components.

The PoC was developed to replicate features similar to those seen in **Budipress** and can be extended to handle more complex interactions and scalability.

## **Key Features (Version 2.0)**

1. **Drag-and-Drop Functionality**:
   - Components can be dragged and dropped inside a designated container.
   - Supports nesting components (e.g., input fields can be dragged into form containers).
   - Components have been set to prevent collision (WIP for future versions).

2. **Resizable Components**:
   - Components within the container can be resized.
   - Resizing is handled using **`react-resizable`**, allowing for dynamic width and height adjustments.
   - Minimum and maximum resize constraints are enforced to ensure proper scaling.

3. **Component Nesting**:
   - Supports nested components, allowing users to drag items into larger containers.
   - Components can be dragged out of their parent containers as well.

4. **Versioning Support**:
   - This version introduces versioning to maintain multiple versions of the project for future development and testing.
   - This current release is **Version 2.0**, introducing resizable components and nesting support.

## **Project Structure**

```
/src
  /components
    - DraggableResizableBox.tsx   // Combines drag-and-drop with resizable features
    - ResizableBox.tsx            // Component with resizing capability
    - DropContainer.tsx           // The container where items are dropped
    - DragDropContainer.tsx       // Main component integrating drag-and-drop and resizing
  /utils
    - DnDTypes.ts                 // Type definitions for react-dnd
  /Types
  /Helpers
  /Context
  /Pages
  /Hooks
```
 

## **Installation and Setup**

To get started with this project locally, follow the steps below:

### **1. Clone the Repository**

```bash
git clone https://github.com/AnonSols/gdd-poc.git
cd gdd-poc
```

### **2. Install Dependencies**

Make sure you have Node.js installed, then install the required packages:

```bash
npm install
```

### **3. Run the Development Server**

You can run the project on a local development server using:

```bash
npm run dev
```

The app should now be available at **http://localhost:5173/**.


## **Usage**

1. **Drag-and-Drop Components**: You can drag components like boxes into the drop container by clicking and dragging.
2. **Resizing Components**: Components can be resized by dragging the bottom-right corner.
3. **Nesting Components**: Drag smaller components (e.g., inputs) into larger ones (e.g., forms).
  

## **Versioning**

- **Current Version**: 2.0
- **New Features in Version 2.0**:
  - Introduced resizable components using **`react-resizable`**.
  - Integrated drag-and-drop with resizable components.
  - Added component nesting within containers.

Future updates will introduce collision prevention and further optimizations for component interaction.
 

## **Technologies Used**

- **React**: For building the component structure.
- **TypeScript**: To add type safety to the components.
- **react-dnd**: For drag-and-drop interactions.
- **react-resizable**: For handling component resizing.
 

## **Future Improvements**
 
- Implementing Nested Droppable Container with collision detection **WIP**
- Enhancing scalability to support more complex component structures and interactions.
- Adding unit tests for better reliability and maintainability.
 

## **Contributing**

If you'd like to contribute to this project, please feel free to submit a pull request. You can fork the repository and create your own feature branches for improvements.
 

## **License**

This project is licensed under the MIT License.
 
## **Socials**

- **GitHub**: [https://github.com/AnonSols](https://github.com/AnonSols)
- **LinkedIn**: [https://www.linkedin.com/in/egede-solomon-32766a23a/](https://www.linkedin.com/in/egede-solomon-32766a23a/) 
 
